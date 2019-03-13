import {useEffect} from 'react'

const useMemoizedOptions = (
  instance: AMap.Polygon | AMap.Polyline | undefined,
  opts: any,
  prevOpts: string,
  setPrevOpts: React.Dispatch<React.SetStateAction<string>>,
) => {
  useEffect(() => {
    if (
      instance === undefined ||
      opts === undefined ||
      JSON.stringify(opts) === prevOpts
    )
      return
    instance.setOptions({
      ...opts,
      path: opts.path
        ? opts.path.map(
            (point: AMap.LngLatLiteral) =>
              new AMap.LngLat(point.lng, point.lat),
          )
        : opts.pathWithHole
        ? opts.pathWithHole.map((path: AMap.LngLatLiteral[]) =>
            path.map(
              (point: AMap.LngLatLiteral) =>
                new AMap.LngLat(point.lng, point.lat),
            ),
          )
        : undefined,
    })
    setPrevOpts(JSON.stringify(opts))
  }, [instance, opts])
}

export default useMemoizedOptions
