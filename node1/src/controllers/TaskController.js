function option (req, res) {
    req.getConnection ((error, conexion)=>{
    conexion.query('SELECT * FROM task', (error, registros)=>{
    if (error) {
        res.json(err);
    }
    console.log(registros);
    res.render('tasks/option', {registros});
        });
    });
}
    
function create(req, res) { 
    res.render(' tasks/create');
}
function store (req, res) { 
    const data = req.body;

    req.getConnection((error, connection) => {
        connection.query('INSERT INTO task SET ?', [data], (error, lines) => {
            console.log(lines); res.redirect('/tasks')
    });
});
}

function destroy(req, res) {
    const id = req.body.id;   

    req.getConnection((error, conexion) => {
    conexion.query('DELETE FROM task WHERE id = ?', [id], (error, registros) => {
    console.log(registros);
    res.redirect('/tasks')
    });    
});
}

function edit (req, res) {
    const id = req.params.id;
    req.getConnection((error, conexion) =>{
        conexion.query('SELECT * FROM task WHERE id = ?', [id], (error, registros) => {
            if (error) {
                res.json(error);
            }
            res.render('tasks/edit', { records });
        });
    });
}

function update(req, res) {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((error, conexion) => {
        conexion.query('UPDATE task SET? WHERE id = ?', [data,id], (error, registros) => {
            res.redirect('/tasks');
        });
    });
}

module.exports = {
    option: option,
    create: create,
    store: store,
    destroy: destroy,
    edit:edit,
    update: update
}