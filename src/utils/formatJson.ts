export function formatJson<T>(jsonInput: Object): Array<T> {
  const objectInArray = Object.values(jsonInput);

  const json = objectInArray.filter((item) => typeof item === "object");

  if (json.length === 1) return json[0];

  return json;
}
