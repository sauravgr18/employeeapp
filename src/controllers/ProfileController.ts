import { NextFunction, Router, Request, Response } from "express";
import {createNewProfile, deleteProfileById, getProfileById, updateProfile} from "../services/ProfileService";

export const profileRouter = Router();

/**
 * GET https:localhost:3000/profile/sdbcjsdhbcjhsbd
 */
profileRouter.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const result = await getProfileById(id)
        res.status(200).json(result)
    } catch (e) {
        next(e)
    }
})

/**
 * PUT https:localhost:3000/profile
 */
profileRouter.put("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const profile = req.body;
        const result = await createNewProfile(profile)
        res.status(201).json(result)
    } catch (e) {
        next(e)
    }
})

/**
 * PATCH https:localhost:3000/profile/sdbcjsdhbcjhsbd
 */
profileRouter.patch("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const profile = req.body;
        const result = await updateProfile(id, profile)
        res.status(200).json(result)
    } catch (e) {
        return next(e)
    }
})

/**
 * DELETE https:localhost:3000/profile/sdbcjsdhbcjhsbd
 */
profileRouter.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        await deleteProfileById(id)
        res.status(200).send()
    } catch (e) {   
        next(e)
    }
})