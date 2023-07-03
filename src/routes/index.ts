import productsRouter from "./products"

const Routes = (app: any) => {
    app.use(productsRouter)
}

export default Routes;