export const groupsError = new Error(`Group is not supported`)

export const threeRootsError = new Error(
  `Roots must consist of 3 principal parts`
)
export const presentRootError = new Error(
  `Present form must end in one of the following: -(i)a, -i, -o`
)

export const pastRootError = new Error(
  `Past form must end in one of the following: -ė, -o`
)

export const infinitiveRootError = new Error(`Infinitive form must end in -ti`)

export const formatError = new Error(`Format not supported`)
