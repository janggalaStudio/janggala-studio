import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: `https://graph.instagram.com/me/media?fields=id,media_url,media_type&access_token=IGQVJXYUF5MUYycGtTLS1XOEs2clRRcXFFRTRpTWdyUktVaHJBakpuVGlEUUgtbGpjdjh2REtyeXRzVVN0eGVndmFad01UMzdvRmJlV09WRDZARZAWdWWXd3ZAS1vQld2eV9FTXp6V0FlQ0Itekg2LWl6cAZDZD`,
});

export default axiosApiIntances;
