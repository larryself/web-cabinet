export const getOperators = async () => {
     const response = await fetch('/api/operators');
     if (!response.ok) {
          throw new Error(response.statusText);
     }
     const data = await response.json();
     return data
}