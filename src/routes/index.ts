import productsRouter from "./products"
import usersRoute from "./users";

const Routes = (app: any) => {
    app.use(productsRouter)
    app.use(usersRoute)
}

export default Routes;