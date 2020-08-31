import { environment } from './../../../environments/environment.prod';
import { Component, OnInit, Output } from '@angular/core';
import { Bars } from '../../models/bars'
import { merge } from 'rxjs';
import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';
@Component({
  selector: 'app-sort-interface',
  templateUrl: './sort-interface.component.html',
  styleUrls: ['./sort-interface.component.css']
})
export class SortInterfaceComponent implements OnInit {

  bars: Bars[];
  sorted: boolean;
  size:number = 50;
  timer:number;
  minNum:number;
  maxNum:number;

  constructor() { }

  ngOnInit(): void {
    this.changeTimer();
    this.changeMinMax(); 
    this.newArray(this.size);
  }


  setTimer(time:number){
    this.timer = time;
  }

  changeSettings(){
    this.changeTimer();
    this.changeMinMax();
    this.newArray(this.size);
  }

  changeTimer(){
    this.timer = parseInt((<HTMLInputElement>document.getElementById('timer')).value);
  }

  changeMinMax(){
    this.minNum = parseInt((<HTMLInputElement>document.getElementById('minNumber')).value);
    this.maxNum = parseInt((<HTMLInputElement>document.getElementById('maxNumber')).value);
    }


  setSize(event){
    this.size = event.target.value;   
    this.newArray(this.size);
    document.getElementById('sizeTag').innerHTML = 'Size: ' + this.size;
  }

  newArray(size:number){
    this.bars = new Array(size);
    for(let i = 0; i < size; i++){
      this.bars[i]= new Bars(this.genRandomNum(this.minNum,this.maxNum));
    }
    this.sorted = false;
  }

  genRandomNum(min,max):number{
    return Math.floor(Math.random() * max) + min;
  }


  async selSort(){
    
    for(let i =0; i < this.size; i++){
      let minimum = i;
      this.select(this.bars[i],'red');
      for(let j = i+1; j< this.size; j++){
        this.select(this.bars[j],'red');
        await this.sleep(this.timer);
        if(this.bars[j].height < this.bars[minimum].height){
          this.deselect(this.bars[minimum]);
          minimum = j;
        }
        else
          this.deselect(this.bars[j]);
      }
      await this.swap(this.bars,i,minimum);
    }

  }

  async bubbleSort(){
    for(let i = 0; i < this.size-1; i++){
      for(let j = 0; j < this.size-i-1; j++){
        if(this.bars[j].height > this.bars[j+1].height){
          await this.swap(this.bars,j,j+1);
        }
      }
    }
  }

  async insertionSort(){
    for(let i = 1; i < this.size; i++){
      let j = i - 1;
      let key = this.bars[i].height;
      while(j >= 0 && this.bars[j].height > key){
        this.select(this.bars[j],'red');
        await this.sleep(this.timer);
        await this.swap(this.bars,j, j+1);
        this.deselect(this.bars[j]);
        j--;
      }
      this.bars[j+1].height = key;
    }
  }

  async mergeSort(){
    let curr, left;
    let n = this.bars.length;
    for(curr = 1; curr <= n-1; curr = 2*curr){
      for(left = 0; left < n-1; left += 2*curr){
        let mid = Math.min(left + curr - 1, n-1);
        let right = Math.min(left + 2*curr -1, n-1);
        this.select(this.bars[left],'red');
        this.select(this.bars[right],'red');
        await this.sleep(this.timer);
        await this.merge(this.bars,left,mid,right);
        this.deselect(this.bars[left]);
        this.deselect(this.bars[right]);
      }
    }
  }

  async merge(arr:Bars[],l:number,m:number,r:number){
    let n1 = m - l + 1;
    let n2 = r - m;
    let i,j,k;
    let L = new Array(n1);
    let R = new Array(n2);

    for(i =0; i<n1; i++){
      this.select(arr[l+i],'green');
      L[i] = arr[l+i].height;
      await this.sleep(this.timer);
      this.deselect(arr[l+i]);
    }
    for(j=0; j<n2; j++){
      this.select(arr[m+1+j],'green');
      R[j] = arr[m+1+j].height;
      await this.sleep(this.timer);
      this.deselect(arr[m+1+j]);
    }
    i= 0;
    j= 0;
    k = l;
    while (i<n1 && j<n2){
      if (L[i] <= R[j]){
        arr[k].height = L[i];
        i++;
      }
      else
      {
        arr[k].height = R[j];
        j++;
      }
      k++
      await this.sleep(this.timer);
    }
    while(i<n1){
      arr[k].height = L[i];
      k++;
      i++;
      await this.sleep(this.timer);
    }
    while(j<n2){
      arr[k].height = R[j];
      k++;
      j++;
      await this.sleep(this.timer);
    }
  }


  sleep(ms):any{
    return new Promise(resolve => setTimeout(resolve,ms));
  }

  async swap(arr,first:number,second:number){
    this.select(arr[first],'red');
    this.select(arr[second],'red');
    await this.sleep(this.timer);
    let temp:Bars = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
    await this.sleep(this.timer);
    this.deselect(arr[first]);
    this.deselect(arr[second]);
    
  }

  select(bar:Bars,color:string){
    bar.color = color;
  }

  deselect(bar:Bars){
    bar.color = 'coral';
  }
  


}
