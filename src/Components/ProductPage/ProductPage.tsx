import { Navigate } from "react-router";
import { useGlobalContext } from "../Context/Context"
import s from "./ProductPage.module.sass"

export const ProductPage = () => {

    const { product } = useGlobalContext();

    return (
        <>
            {product === null ? <Navigate to="/" replace={true} />
                : (
                    <section className={s.productPage}>
                        <h1>{product?.description}</h1>
                    </section>
                )}
        </>
    )
}