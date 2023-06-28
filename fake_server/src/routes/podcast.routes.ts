import express, { Request, Response, Router, NextFunction } from "express";
import { PodcastController } from "../controllers/podcasts.controller";

const router: Router = express.Router();
const controller: PodcastController = new PodcastController();

router.get(
  "/api/podcasts",
  async (request: Request, response: Response, next: NextFunction) => {
    const result = await controller.getPodcasts();
    response.status(200).send(result);
  }
);

router.get(
  "/api/podcasts/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).send((await controller.getPodcast(request.params)));    
  }
);

export const podcastRouter: Router = router;
