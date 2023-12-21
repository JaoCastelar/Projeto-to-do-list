const validateFieldTitle = (req, res, next) => {
    const { body } = req;

    if (body.title === undefined) {
        return res.status(400).json({message: 'Campo "title" é requerido'});
    }
    else if (body.title === ''){
        return res.status(400).json({message: '"title" não pode ser vazio'});
    }

    next();
};

const validateFieldStatus = (req, res, next) => {
    const { body } = req;

    if (body.status === undefined) {
        return res.status(400).json({message: 'Campo "status" é requerido'});
    }
    else if (body.status === ''){
        return res.status(400).json({message: '"status" não pode ser vazio'});
    }

    next();
};

module.exports = {
    validateFieldTitle,
    validateFieldStatus
};