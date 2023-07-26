export type FormValues = {
  [k: string]: string
}

export type FormValidations = {
    [k: string]: [(value: string) => boolean, string]
}
