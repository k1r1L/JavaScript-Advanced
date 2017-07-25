function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', convert);
    // All units expressed in meters
    let rates = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254
    };

    function convert() {
        let incoming = Number(document.getElementById('inputDistance').value);
        let inUnits = document.getElementById('inputUnits').value;
        let outUnits = document.getElementById('outputUnits').value;
        let result = incoming * rates[inUnits] / rates[outUnits];
        document.getElementById('outputDistance').value = result;
    }
}