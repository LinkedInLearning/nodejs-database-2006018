const { db } = require('../data/postgres');

exports.getStatuses = async () => {
    return new Promise((res, rej) => res([
        { id: 1, name: 'My first dummy status'},
        { id: 2, name: 'My second dummy status'},
    ]));
}

exports.addStatus = async (status) => {
    try {
        return new Promise((res, rej) => res('Status successfully added'));
    } catch (error) {
        return undefined;
    }
}

exports.getStatus = async (id) => {
    return new Promise(res, rej => res({ id: 1, name: 'My first dummy status'}));
}

exports.editStatus = async (status) => {
    return new Promise((res, rej) => res('Status successfully edited.'));
}
