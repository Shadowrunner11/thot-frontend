export function cleanPOJO<T = any>(pojo: Record<string, T>){
  const newPojo = Object.keys(pojo)?.reduce((newPojo: Record<string, T>, next) => {
    const isNill = pojo[next] == null

    if(!isNill){
      newPojo[next] = pojo[next]
    }

    return newPojo
  }, {})

  return Object.keys(newPojo).length ? newPojo : null
}

export function cleanPojoMutable<T = any>(pojo: Record<string, T>){
  for (const key in pojo) {
    if (!Object.prototype.hasOwnProperty.call(pojo, key)) {
      delete pojo[key]
    }
  }

  return pojo
}
