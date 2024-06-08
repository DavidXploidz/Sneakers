import { useContext } from "react";
import SneakersContext from '../context/SneakersProvider'


const useSneakers = () => {

    return useContext(SneakersContext)

}

export default useSneakers

