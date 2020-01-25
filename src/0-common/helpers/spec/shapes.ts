export const

shape = x => ({
  left: x,
  right: x,
}),

shape2 = (x, y) => ({
  left: x,
  right: {
    left: x,
    right: y,
  }
}),

shape3 = (x, y, z) => ({
  left: {
    left: {
      left: z,
      right: z,
    },
    right: y,
  },
  right: {
    left: {
      left: z,
      right: z,
    },
    right: {
      left: y,
      right: x,
    }
  }
})