import { Request, Response } from "express"

export const getPlayer = async(req: Request, res: Response) => {
    res.status(200).json({player: "Messi"})
}