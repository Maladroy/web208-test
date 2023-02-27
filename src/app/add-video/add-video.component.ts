import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  videoForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private videoService: VideoService) {
  }

  ngOnInit(): void {
    this.videoForm = this.fb.group({
      id: ['', []],
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(200)]],
      url: ['', [Validators.required]],
      view_number: ['', [Validators.required]]
    })
  }
  onSubmit() {
    this.videoForm.value.id = Math.round(Math.random() * 1000000)

    if (this.videoForm.valid && confirm("Add video?")) {
      this.videoService.addVideo(this.videoForm.value).then(() => {
        alert("Them thanh cong")
        this.router.navigate(['/videos'])
      })
    }
  }

  get f(): any {
    return this.videoForm.controls;
  }
}
