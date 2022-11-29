import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setisSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            setisSellerLoading(true)
            fetch(`http://localhost:5000/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller);
                    setisSellerLoading(false);
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
}

export default useSeller;