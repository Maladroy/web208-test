import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { IVideo } from 'src/models/video.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: IVideo[];

  constructor(private videoService: VideoService, private router: Router) {

  }

  async ngOnInit() {
    this.videos = await this.getVideo()
  }

  async getVideo(id?: number) {
    if (id) return (await this.videoService.getVideo(id)).data;
    return (await this.videoService.getVideo()).data;
  }

  deleteVideo(id: number) {
    if (confirm("Xoa video?")) {
      this.videoService.deleteVideo(id).then(() => {
        alert("Xoa thanh cong")
        window.location.reload();
      })
    }
  }
}
