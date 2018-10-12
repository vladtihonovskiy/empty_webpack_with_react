import customToastify from '../customFunction/customToastify';
import { loader } from "../components/Loader/Loader";
import axios from "axios";
import { apiRequestUrl } from "../constans/api";



export const getRequest = async (src) => {
	loader.show();
	try {
		const result = await axios.get(`${apiRequestUrl}${src}`);
		loader.hide();
		return result.data;
	}
	catch (e) {
		loader.hide();
		throw e;
	}
}

export const postRequest = async (src, data) => {
	loader.show();
	try {
		const result = await axios.post(`${apiRequestUrl}${src}`, { ...data }

	);
		loader.hide();
		return result.data;
	}
	catch (error) {
		loader.hide();
		throw error.response.data.error;
	}
}
