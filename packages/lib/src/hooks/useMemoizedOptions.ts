import {useEffect} from 'react'

const useMemoizedOptions = (
  instance: AMap.BasicShape | undefined,
  opts: any,
  prevOpts: string,
  setPrevOpts: React.Dispatch<React.SetStateAction<string>>,
  type?: string,
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
      bounds: opts.bounds
        ? new AMap.Bounds(
            new AMap.LngLat(
              opts.bounds.southWest.lng,
              opts.bounds.southWest.lat,
              opts.bounds.southWest.noAutoFix,
            ),
            new AMap.LngLat(
              opts.bounds.northEast.lng,
              opts.bounds.northEast.lat,
              opts.bounds.northEast.noAutoFix,
            ),
          )
        : undefined,
      center: opts.center
        ? new AMap.LngLat(
            opts.center.lng,
            opts.center.lat,
            opts.center.noAutoFix,
          )
        : undefined,
      path: opts.path
        ? type === 'bezier-curve'
          ? opts.path
          : opts.path.map(
              (point: AMap.LngLatLiteral) =>
                new AMap.LngLat(point.lng, point.lat),
            )
        : opts.path2D
        ? opts.path2D.map((path: AMap.LngLatLiteral[]) =>
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
