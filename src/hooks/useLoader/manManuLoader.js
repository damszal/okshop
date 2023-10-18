export const manManuLoader = async () =>{
  const res = await fetch("https://damszal.github.io/data.geojson")
  const manuJson = await res.json()
  const manManuShort = await manuJson.manuColumns[1].columnMen;

  return manManuShort
}