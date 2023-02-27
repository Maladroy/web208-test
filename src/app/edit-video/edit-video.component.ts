import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent {
  videoForm: FormGroup;
  videoID: number;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private videoService: VideoService) {
  }

  ngOnInit(): void {
    this.videoID = this.route.snapshot.paramMap.get('id') as unknown as number
    this.videoForm = this.fb.group({
      id: ['', []],
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(200)]],
      url: ['', [Validators.required]],
      view_number: ['', [Validators.required]]
    })

    this.videoService.getVideo(this.videoID).then(res => {
      console.log(res.data);
      this.videoForm.patchValue(res.data)
    })
  }
  onSubmit() {
    if (this.videoForm.valid && confirm("Update video?")) {
      this.videoService.updateVideo(this.videoID, this.videoForm.value).then(() => {
        alert("Update thanh cong")
        this.router.navigate(['/videos'])
      })
    }

  }

  get f(): any {
    return this.videoForm.controls;
  }
}
