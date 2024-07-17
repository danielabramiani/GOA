let globalValue = {
    nestedValue: null
};

function setNestedValue(newValue){
    let localValue = newValue;
    globalValue.nestedValue = localValue;
}

setNestedValue("Daniel, abramiani");

console.log(globalValue.nestedValue);