import axios from "axios";

export default {
    postProfile: function(profileData){
        return axios.post("/api/profile/experience", profileData)
    },
    
}
