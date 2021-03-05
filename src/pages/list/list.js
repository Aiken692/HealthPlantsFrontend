const KEYS = {
    remedies:'remedies',
    remedyId: 'remedyId'
}



export function insertRemedy(data) {
    let remedies = getAllRemedies();
    data['id'] = generateRemedyId();
    remedies.push(data)
    localStorage.setItem(KEYS.remedies, JSON.stringify(remedies))
}


export function updateRemedy(data) {
    let remedies = getAllRemedies();
    let recordIndex = remedies.findIndex(x => x.id == data.id);
    remedies[recordIndex] = { ...data }
    localStorage.setItem(KEYS.remedies, JSON.stringify(remedies))
}


export function generateRemedyId() {
    if (localStorage.getItem(KEYS.remedyId) == null)
        localStorage.setItem(KEYS.remedyId, '0')
    var id = parseInt(localStorage.getItem(KEYS.remedyId))
    localStorage.setItem(KEYS.remedyId, (++id).toString())
    return id;
}

export function getAllRemedies() {
    if (localStorage.getItem(KEYS.remedies) == null)
        localStorage.setItem(KEYS.remedies, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.remedies));
}

