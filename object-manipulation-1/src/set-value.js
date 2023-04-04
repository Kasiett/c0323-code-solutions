/* exported setValue */
function setValue(object, key, value) {
  const result = object[key] = value;
  return result;
}
