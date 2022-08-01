import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss', '../../main/shared/sharedstyle.scss']
})
export class SettingsComponent implements OnInit {
  dropdownList : any[] = [];
  selectedItems : any[] = [];
  formData!: FormGroup
  dropdownSettings! :IDropdownSettings;
  constructor() { }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.createForm()
  }
  onItemSelect(item: any) {
  
    (<FormArray>this.formData.get('employees')).push(new FormControl(item));
    // (<FormArray>this.formData.get('employees')).push(item)
  }
  onSelectAll(items: any) {
    (<FormArray>this.formData.get('employees')).push(new FormControl(items))
    // console.log(items);
  }
  
  onSubmit(data : any) {
    console.log(data)
  }
  
  createForm(){
    this.formData = new FormGroup({
      firstname : new FormControl('', [Validators.required]),
      lastname : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      employees : new FormArray([])
    })
  }
}