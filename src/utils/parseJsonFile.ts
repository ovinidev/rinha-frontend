export async function parseJsonFile(file: File): Promise<Object> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onerror = (error) => reject(error);
    fileReader.onload = (event: any) => {
      try {
        const jsonData = JSON.parse(event.target.result);
        resolve(jsonData);
      } catch (error) {
        reject(error);
      }
    };
    fileReader.readAsText(file);
  });
}
