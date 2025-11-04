document.addEventListener('DOMContentLoaded', () => {

    const key = 'todo.tasks.v1';
    const form = document.getElementById('todo-form');
    const input = document.getElementById('task-input');
    const list = document.getElementById('task-list');

    let tasks;
    try {
        tasks = JSON.parse(localStorage.getItem(key) || '[]');
    } catch {
        tasks = [];
    }

    const esc = (s) => {
        const div = document.createElement('div');
        div.textContent = s;
        return div.innerHTML;
    };

    const render = () => {
        list.innerHTML = tasks.map(t => `
        <li class="task-item${t.completed ? ' completed' : ''}" data-id="${t.id}">
            <span class="task-text">${esc(t.text)}</span>
            <button class="icon-btn delete-btn" aria-label="Delete ${esc(t.text)}">✖</button>
        </li>`)
        .join('');

    };

    const update = () => { 
        localStorage.setItem(key, JSON.stringify(tasks)); 
        render();
    };

    render();

    form.addEventListener('submit', (e) => {

        e.preventDefault();
        const text = input.value.trim();

        if (!text) return;

        tasks.push({ id: Date.now().toString(36) , text, completed: false });
        input.value = '';
        input.focus();
        update();

    });

    list.addEventListener('click', (e) => {

        const li = e.target.closest('li.task-item');
        if (!li) return;

        const id = li.dataset.id;

        if (e.target.classList.contains('delete-btn')) {
            
            tasks = tasks.filter(t => t.id !== id);
        
        } else if (e.target.classList.contains('task-text')) {
         
            tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
        
        } else return;
        update();
    });
});
