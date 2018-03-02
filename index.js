export async function instantiate(load, fn) {
    let module = await this.import(load.address)
    let bindings = { default: module }
    Object.assign(bindings, module)
    return this.newModule(bindings)
}
