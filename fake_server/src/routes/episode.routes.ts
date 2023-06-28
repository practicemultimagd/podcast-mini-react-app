import express, { Request, Response, Router, NextFunction } from "express";
import { EpisodeController } from "../controllers/episode.controller";

const router: Router = express.Router();
const controller: EpisodeController = new EpisodeController();

router.get(
  "/api/podcasts/:podcast_id/episodes/:episode_id",
  async (request: Request, response: Response, next: NextFunction) => {
    const result = await controller.getEpisode(request.params);
    response.status(200).send(result);
  }
);

export const episodeRouter: Router = router;
