import { useEffect, useState } from "react"
import { BoxMui } from "./BoxMui"

export const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])


    return (
        <>
            <BoxMui loading={loading} res="https://images.unsplash.com/photo-1635621714885-5c372b6cfddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />

            <BoxMui loading={loading} res="https://images.unsplash.com/photo-1678612836754-eba3673f7080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />

            <BoxMui loading={loading} res="https://images.unsplash.com/photo-1679770884293-a4f41b5f05cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />

            <BoxMui loading={loading} res="https://images.unsplash.com/photo-1678780593184-c71d50923fd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />

            <BoxMui loading={loading} res="https://images.unsplash.com/photo-1676715051398-ce7f932dcd5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1146&q=80" />

            <BoxMui loading={loading} res="https://images.unsplash.com/photo-1675180551534-745e2a2dbbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />

            <BoxMui loading={loading} res="https://images.unsplash.com/photo-1658325501458-472117e77faa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" />

            <BoxMui loading={loading} res="https://images.unsplash.com/photo-1677116719762-fd4f4c4b7e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1016&q=80" />

        </>
    )
}
