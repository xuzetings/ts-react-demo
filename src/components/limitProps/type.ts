type VehicleType = {
  name: string
  speed: number
}

type Airplane = VehicleType & {
  maxHeight: number

  displacement?: never
}

type Ship = VehicleType & {
  displacement: number

  maxHeight?: never
}

type Vehicle = Airplane | Ship

export default Vehicle