import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const Verify = () => {

    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext)
    const [searchParams, setSearchParams] = useSearchParams()

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async () => {
        try {
            if (!token) {
                return null
            }

            const response = await axios.post(
                backendUrl + '/api/order/verifyStripe',
                { success, orderId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )


            if (response.data.success) {
                setCartItems({})
                navigate('/orders', { replace: true })
            }
            else {
                navigate('/cart')
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (success && orderId && token) {
            verifyPayment()
        }
    }, [success, orderId, token])


    return (
        <div>

        </div>
    )
}

export default Verify