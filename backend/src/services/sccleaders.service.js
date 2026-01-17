import * as sccLeadersModel from "../models/sccleaders.model.js"

export const createsccLeadersServices = async (data) => {
    if (!data) {
        throw new Error("No data provided");
    }
    if (!data.exec_first_name || !data.exec_last_name || !data.position ) {  
        throw new Error("Missing required fields");
    }

    return await sccLeadersModel.createsccLeader(data)

}
export const getsccLeadersServices = async () => {
    return await sccLeadersModel.getsccLeaders()

}

export const deletesccLeadersServices = async (id) => {
    if (!id) throw new Error("Leader ID required");
    return await sccLeadersModel.deletesccLeader(id)
}

