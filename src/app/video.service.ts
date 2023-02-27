import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from "axios"
import { IVideo } from 'src/models/video.model';


@Injectable({
  providedIn: 'root'
})
export class VideoService {
  inst: AxiosInstance;

  constructor() {
    this.inst = axios.create({
      baseURL: "https://63e26e4c109336b6cb079437.mockapi.io/api/v1",
      timeout: 3000,
      headers: { 'X-Custom-Header': 'foobar' }
    });
  }

  getVideo(id?: number) {
    if (id) return this.inst.get("/video/" + id)
    return this.inst.get("/video")
  }

  deleteVideo(id: number) {
    return this.inst.delete("/video/" + id)
  }

  addVideo(body: IVideo) {
    return this.inst.post("/video", body)
  }

  updateVideo(id: number, body: IVideo) {
    return this.inst.put("/video/" + id, body)
  }
}
