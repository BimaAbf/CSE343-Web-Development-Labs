// --- Select Nodes ---
const exprEl = document.getElementById('expression');
const resultEl = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');

// --- State ---
let expression = '';
let lastTokenType = 'start'; // start | number | op | open | close | dot

function updateDisplay() {
    exprEl.textContent = expression;
    if (!expression) {
        resultEl.textContent = '0';
        return;
    }
    try {
        const val = evaluateExpression(expression);
        resultEl.textContent = Number.isFinite(val) ? formatNumber(val) : 'Error';
    } catch (e) {
        resultEl.textContent = '';
    }
}

function formatNumber(n) {
    // trim long decimals
    const str = Math.abs(n) > 1e12 ? n.toString() : n.toFixed(10);
    return parseFloat(str).toString();
}

function inputDigit(d) {
    if (d === '.') {
        // prevent multiple dots in a contiguous number
        const lastNumber = expression.match(/([\d]*\.?[\d]*)$/)?.[0] ?? '';
        if (lastNumber.includes('.')) return;
        if (lastTokenType !== 'number') {
            // start a new number with leading 0.
            expression += (lastTokenType === 'close' ? '×' : '') + '0';
        }
        expression += '.';
        lastTokenType = 'number';
    } else {
        // implicit multiplication: 2( -> 2×(
        if (lastTokenType === 'close') expression += '×';
        expression += d;
        lastTokenType = 'number';
    }
}

function inputOp(opChar) {
    // replace existing trailing op
    if (lastTokenType === 'op') {
        expression = expression.slice(0, -1) + opChar;
    } else if (lastTokenType === 'start') {
        if (opChar === '−') expression = '−'; // allow leading minus
        else return;
    } else {
        expression += opChar;
    }
    lastTokenType = 'op';
}

function openParen() {
    if (lastTokenType === 'number' || lastTokenType === 'close') expression += '×';
    expression += '(';
    lastTokenType = 'open';
}

function closeParen() {
    // only add if there are unmatched opens
    const opens = (expression.match(/\(/g) || []).length;
    const closes = (expression.match(/\)/g) || []).length;
    if (opens > closes && lastTokenType !== 'op' && lastTokenType !== 'open' && lastTokenType !== 'start') {
        expression += ')';
        lastTokenType = 'close';
    }
}

function clearAll() {
    expression = '';
    lastTokenType = 'start';
}

function equals() {
    try {
        const val = evaluateExpression(expression);
        if (!Number.isFinite(val)) throw new Error('Invalid');
        expression = formatNumber(val);
        lastTokenType = 'number';
    } catch (e) {
        expression = 'Error';
        lastTokenType = 'start';
    }
}

function recalcLastTokenType() {
    if (!expression) return 'start';
    const ch = expression[expression.length - 1];
    if (/\d/.test(ch) || ch === '.') return 'number';
    if (ch === '(') return 'open';
    if (ch === ')') return 'close';
    if (['+','−','×','÷'].includes(ch)) return 'op';
    return 'start';
}

function deleteLast() {
    if (!expression) return;
    expression = expression.slice(0, -1);
    lastTokenType = recalcLastTokenType();
}

// --- Parser/Evaluator with precedence and parentheses ---
function evaluateExpression(expr) {
    if (!expr) return 0;
    // replace × and ÷ with * and /
    const normalized = expr.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
    // simple tokenizer: numbers, parentheses, operators
    const tokens = normalized.match(/\d*\.?\d+|[()+\-*/]/g);
    if (!tokens) throw new Error('Bad input');

    let i = 0;
    function parseExpression() {
        let value = parseTerm();
        while (i < tokens.length && (tokens[i] === '+' || tokens[i] === '-')) {
            const op = tokens[i++];
            const rhs = parseTerm();
            value = op === '+' ? value + rhs : value - rhs;
        }
        return value;
    }
    function parseTerm() {
        let value = parseFactor();
        while (i < tokens.length && (tokens[i] === '*' || tokens[i] === '/')) {
            const op = tokens[i++];
            const rhs = parseFactor();
            if (op === '*') value *= rhs; else {
                if (rhs === 0) throw new Error('Div0');
                value /= rhs;
            }
        }
        return value;
    }
    function parseFactor() {
        let sign = 1;
        while (tokens[i] === '+' || tokens[i] === '-') {
            if (tokens[i] === '-') sign *= -1;
            i++;
        }
        let value;
        if (tokens[i] === '(') {
            i++;
            value = parseExpression();
            if (tokens[i] !== ')') throw new Error('Mismatched');
            i++;
        } else {
            const num = parseFloat(tokens[i]);
            if (Number.isNaN(num)) throw new Error('NaN');
            i++;
            value = num;
        }
        return sign * value;
    }

    const result = parseExpression();
    if (i !== tokens.length) throw new Error('Unexpected');
    return result;
}

// --- Events ---
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset.number) {
            inputDigit(btn.dataset.number);
        } else if (btn.dataset.action) {
            switch (btn.dataset.action) {
                case 'clear': clearAll(); break;
                case 'add': inputOp('+'); break;
                case 'subtract': inputOp('−'); break;
                case 'multiply': inputOp('×'); break;
                case 'divide': inputOp('÷'); break;
                case 'open-paren': openParen(); break;
                case 'close-paren': closeParen(); break;
                case 'equals': equals(); break;
            }
        }
        updateDisplay();
    });
});

// Keyboard support
window.addEventListener('keydown', (e) => {
    const key = e.key;
    if (/^[0-9]$/.test(key)) {
        inputDigit(key);
    } else if (key === '.') {
        inputDigit('.');
    } else if (key === '+' ) {
        inputOp('+');
    } else if (key === '-' ) {
        inputOp('−');
    } else if (key === '*' ) {
        inputOp('×');
    } else if (key === '/' ) {
        inputOp('÷');
    } else if (key === '(' ) {
        openParen();
    } else if (key === ')' ) {
        closeParen();
    } else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        equals();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearAll();
    } else {
        return; // ignore other keys
    }
    updateDisplay();
});

updateDisplay();
