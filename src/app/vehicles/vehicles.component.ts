import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
public term:string='';
public manufactureValue:string='';
public fuelValue:string='';
public colorValue:string='';
public typeValue:string='';
public costValue:string='';
public formValue:number=0;
public toValue:number=0;

public vehicles:any=[
  {
      "Vehicle": "BMW Silverado",
      "manufacturer": "Porsche",
      "model": "Camry",
      "type": "Passenger Van",
      "fuel": "Hybrid",
      "color": "salmon",
      "image": "https://loremflickr.com/640/480/abstract",
      "cost": "584.00",
      "id": "1"
  },
  {
      "Vehicle": "Aston Martin Grand Caravan",
      "manufacturer": "Rolls Royce",
      "model": "Camaro",
      "type": "Wagon",
      "fuel": "Electric",
      "color": "yellow",
      "image": "https://loremflickr.com/640/480/food",
      "cost": "704.00",
      "id": "2"
  },
  {
      "Vehicle": "Honda Beetle",
      "manufacturer": "Volvo",
      "model": "Element",
      "type": "Crew Cab Pickup",
      "fuel": "Diesel",
      "color": "gold",
      "image": "https://loremflickr.com/640/480/business",
      "cost": "971.00",
      "id": "3"
  },
  {
      "Vehicle": "Chrysler Fiesta",
      "manufacturer": "Hyundai",
      "model": "Model 3",
      "type": "Wagon",
      "fuel": "Gasoline",
      "color": "orange",
      "image": "https://loremflickr.com/640/480/animals",
      "cost": "288.00",
      "id": "4"
  },
  {
      "Vehicle": "Porsche Model 3",
      "manufacturer": "Aston Martin",
      "model": "Fortwo",
      "type": "Convertible",
      "fuel": "Electric",
      "color": "lime",
      "image": "https://loremflickr.com/640/480/food",
      "cost": "159.00",
      "id": "5"
  },
  {
      "Vehicle": "Kia Grand Caravan",
      "manufacturer": "Ford",
      "model": "Mustang",
      "type": "Minivan",
      "fuel": "Diesel",
      "color": "black",
      "image": "https://loremflickr.com/640/480/business",
      "cost": "730.00",
      "id": "6"
  },
  {
      "Vehicle": "Tesla Prius",
      "manufacturer": "Land Rover",
      "model": "Prius",
      "type": "Hatchback",
      "fuel": "Gasoline",
      "color": "plum",
      "image": "https://loremflickr.com/640/480/cats",
      "cost": "261.00",
      "id": "7"
  },
  {
      "Vehicle": "Cadillac Jetta",
      "manufacturer": "Jeep",
      "model": "Camaro",
      "type": "Crew Cab Pickup",
      "fuel": "Gasoline",
      "color": "pink",
      "image": "https://loremflickr.com/640/480/business",
      "cost": "470.00",
      "id": "8"
  },
  {
      "Vehicle": "Fiat Ranchero",
      "manufacturer": "Cadillac",
      "model": "CTS",
      "type": "Cargo Van",
      "fuel": "Electric",
      "color": "fuchsia",
      "image": "https://loremflickr.com/640/480/abstract",
      "cost": "27.00",
      "id": "9"
  },
  {
      "Vehicle": "Maserati Civic",
      "manufacturer": "Tesla",
      "model": "Grand Caravan",
      "type": "Cargo Van",
      "fuel": "Hybrid",
      "color": "teal",
      "image": "https://loremflickr.com/640/480/fashion",
      "cost": "107.00",
      "id": "10"
  },
  {
      "Vehicle": "Toyota Beetle",
      "manufacturer": "BMW",
      "model": "Camry",
      "type": "Passenger Van",
      "fuel": "Electric",
      "color": "silver",
      "image": "https://loremflickr.com/640/480/fashion",
      "cost": "862.00",
      "id": "11"
  },
  {
      "Vehicle": "Hyundai Cruze",
      "manufacturer": "Land Rover",
      "model": "Corvette",
      "type": "Convertible",
      "fuel": "Hybrid",
      "color": "black",
      "image": "https://loremflickr.com/640/480/technics",
      "cost": "55.00",
      "id": "12"
  },
  {
      "Vehicle": "Honda Cruze",
      "manufacturer": "Volkswagen",
      "model": "Countach",
      "type": "Extended Cab Pickup",
      "fuel": "Hybrid",
      "color": "gold",
      "image": "https://loremflickr.com/640/480/business",
      "cost": "977.00",
      "id": "13"
  },
  {
      "Vehicle": "Nissan Silverado",
      "manufacturer": "Dodge",
      "model": "Challenger",
      "type": "Cargo Van",
      "fuel": "Gasoline",
      "color": "olive",
      "image": "https://loremflickr.com/640/480/technics",
      "cost": "350.00",
      "id": "14"
  },
  {
      "Vehicle": "Nissan 1",
      "manufacturer": "Maserati",
      "model": "2",
      "type": "Cargo Van",
      "fuel": "Gasoline",
      "color": "orange",
      "image": "https://loremflickr.com/640/480/nature",
      "cost": "345.00",
      "id": "15"
  },
  {
      "Vehicle": "Chrysler Roadster",
      "manufacturer": "Bentley",
      "model": "Silverado",
      "type": "Wagon",
      "fuel": "Gasoline",
      "color": "grey",
      "image": "https://loremflickr.com/640/480/transport",
      "cost": "324.00",
      "id": "16"
  },
  {
      "Vehicle": "Polestar A4",
      "manufacturer": "Smart",
      "model": "Durango",
      "type": "Crew Cab Pickup",
      "fuel": "Electric",
      "color": "yellow",
      "image": "https://loremflickr.com/640/480/nature",
      "cost": "262.00",
      "id": "17"
  },
  {
      "Vehicle": "Nissan Beetle",
      "manufacturer": "Volkswagen",
      "model": "Mustang",
      "type": "Minivan",
      "fuel": "Electric",
      "color": "black",
      "image": "https://loremflickr.com/640/480/fashion",
      "cost": "58.00",
      "id": "18"
  },
  {
      "Vehicle": "Dodge Volt",
      "manufacturer": "Jeep",
      "model": "Camaro",
      "type": "Coupe",
      "fuel": "Hybrid",
      "color": "yellow",
      "image": "https://loremflickr.com/640/480/sports",
      "cost": "732.00",
      "id": "19"
  },
  {
      "Vehicle": "Honda Durango",
      "manufacturer": "Ferrari",
      "model": "Prius",
      "type": "Cargo Van",
      "fuel": "Hybrid",
      "color": "black",
      "image": "https://loremflickr.com/640/480/abstract",
      "cost": "715.00",
      "id": "20"
  },
  {
      "Vehicle": "Bentley Durango",
      "manufacturer": "Jeep",
      "model": "Civic",
      "type": "Sedan",
      "fuel": "Diesel",
      "color": "black",
      "image": "https://loremflickr.com/640/480/food",
      "cost": "709.00",
      "id": "21"
  },
  {
      "Vehicle": "Mini Aventador",
      "manufacturer": "Bentley",
      "model": "Countach",
      "type": "Hatchback",
      "fuel": "Diesel",
      "color": "white",
      "image": "https://loremflickr.com/640/480/animals",
      "cost": "963.00",
      "id": "22"
  },
  {
      "Vehicle": "Toyota 2",
      "manufacturer": "Tesla",
      "model": "911",
      "type": "Passenger Van",
      "fuel": "Diesel",
      "color": "silver",
      "image": "https://loremflickr.com/640/480/city",
      "cost": "974.00",
      "id": "23"
  },
  {
      "Vehicle": "Kia 2",
      "manufacturer": "Lamborghini",
      "model": "Roadster",
      "type": "Convertible",
      "fuel": "Electric",
      "color": "tan",
      "image": "https://loremflickr.com/640/480/food",
      "cost": "994.00",
      "id": "24"
  },
  {
      "Vehicle": "Chevrolet Taurus",
      "manufacturer": "Cadillac",
      "model": "Aventador",
      "type": "Wagon",
      "fuel": "Hybrid",
      "color": "pink",
      "image": "https://loremflickr.com/640/480/food",
      "cost": "772.00",
      "id": "25"
  },
  {
      "Vehicle": "Porsche Explorer",
      "manufacturer": "Jeep",
      "model": "F-150",
      "type": "SUV",
      "fuel": "Gasoline",
      "color": "white",
      "image": "https://loremflickr.com/640/480/technics",
      "cost": "800.00",
      "id": "26"
  },
  {
      "Vehicle": "Hyundai 2",
      "manufacturer": "Jaguar",
      "model": "Grand Cherokee",
      "type": "Convertible",
      "fuel": "Electric",
      "color": "purple",
      "image": "https://loremflickr.com/640/480/city",
      "cost": "369.00",
      "id": "27"
  },
  {
      "Vehicle": "Mini El Camino",
      "manufacturer": "Jaguar",
      "model": "Escalade",
      "type": "SUV",
      "fuel": "Diesel",
      "color": "mint green",
      "image": "https://loremflickr.com/640/480/food",
      "cost": "422.00",
      "id": "28"
  },
  {
      "Vehicle": "Jeep Cruze",
      "manufacturer": "Toyota",
      "model": "Altima",
      "type": "Hatchback",
      "fuel": "Gasoline",
      "color": "white",
      "image": "https://loremflickr.com/640/480/sports",
      "cost": "220.00",
      "id": "29"
  },
  {
      "Vehicle": "Rolls Royce F-150",
      "manufacturer": "Ferrari",
      "model": "Accord",
      "type": "Extended Cab Pickup",
      "fuel": "Hybrid",
      "color": "mint green",
      "image": "https://loremflickr.com/640/480/sports",
      "cost": "369.00",
      "id": "30"
  },
  {
      "Vehicle": "Chevrolet Grand Cherokee",
      "manufacturer": "Tesla",
      "model": "CTS",
      "type": "Crew Cab Pickup",
      "fuel": "Electric",
      "color": "teal",
      "image": "https://loremflickr.com/640/480/business",
      "cost": "614.00",
      "id": "31"
  },
  {
      "Vehicle": "Honda ATS",
      "manufacturer": "Bentley",
      "model": "Civic",
      "type": "SUV",
      "fuel": "Electric",
      "color": "lime",
      "image": "https://loremflickr.com/640/480/fashion",
      "cost": "151.00",
      "id": "32"
  },
  {
      "Vehicle": "Bugatti 911",
      "manufacturer": "Volvo",
      "model": "XTS",
      "type": "Extended Cab Pickup",
      "fuel": "Diesel",
      "color": "turquoise",
      "image": "https://loremflickr.com/640/480/fashion",
      "cost": "834.00",
      "id": "33"
  },
  {
      "Vehicle": "Dodge A4",
      "manufacturer": "Aston Martin",
      "model": "Golf",
      "type": "Passenger Van",
      "fuel": "Electric",
      "color": "turquoise",
      "image": "https://loremflickr.com/640/480/sports",
      "cost": "584.00",
      "id": "34"
  },
  {
      "Vehicle": "Tesla A4",
      "manufacturer": "Bugatti",
      "model": "Model T",
      "type": "Minivan",
      "fuel": "Hybrid",
      "color": "silver",
      "image": "https://loremflickr.com/640/480/food",
      "cost": "501.00",
      "id": "35"
  },
  {
      "Vehicle": "Aston Martin Explorer",
      "manufacturer": "Porsche",
      "model": "Altima",
      "type": "Minivan",
      "fuel": "Electric",
      "color": "orchid",
      "image": "https://loremflickr.com/640/480/business",
      "cost": "376.00",
      "id": "36"
  },
  {
      "Vehicle": "BMW F-150",
      "manufacturer": "Rolls Royce",
      "model": "Altima",
      "type": "Minivan",
      "fuel": "Diesel",
      "color": "lavender",
      "image": "https://loremflickr.com/640/480/city",
      "cost": "600.00",
      "id": "37"
  },
  {
      "Vehicle": "Chrysler Fortwo",
      "manufacturer": "Volkswagen",
      "model": "Jetta",
      "type": "Extended Cab Pickup",
      "fuel": "Hybrid",
      "color": "cyan",
      "image": "https://loremflickr.com/640/480/nature",
      "cost": "864.00",
      "id": "38"
  },
  {
      "Vehicle": "Jaguar Jetta",
      "manufacturer": "Jaguar",
      "model": "Sentra",
      "type": "Convertible",
      "fuel": "Diesel",
      "color": "violet",
      "image": "https://loremflickr.com/640/480/sports",
      "cost": "986.00",
      "id": "39"
  },
  {
      "Vehicle": "Polestar 2",
      "manufacturer": "Volkswagen",
      "model": "XC90",
      "type": "Coupe",
      "fuel": "Electric",
      "color": "purple",
      "image": "https://loremflickr.com/640/480/business",
      "cost": "225.00",
      "id": "40"
  },
  {
      "Vehicle": "Smart Civic",
      "manufacturer": "Mazda",
      "model": "Fortwo",
      "type": "Minivan",
      "fuel": "Gasoline",
      "color": "teal",
      "image": "https://loremflickr.com/640/480/transport",
      "cost": "868.00",
      "id": "41"
  },
  {
      "Vehicle": "Mazda XC90",
      "manufacturer": "Audi",
      "model": "Model T",
      "type": "Coupe",
      "fuel": "Gasoline",
      "color": "red",
      "image": "https://loremflickr.com/640/480/nightlife",
      "cost": "739.00",
      "id": "42"
  },
  {
      "Vehicle": "Volvo Model T",
      "manufacturer": "Fiat",
      "model": "Sentra",
      "type": "SUV",
      "fuel": "Hybrid",
      "color": "violet",
      "image": "https://loremflickr.com/640/480/technics",
      "cost": "140.00",
      "id": "43"
  },
  {
      "Vehicle": "Honda CTS",
      "manufacturer": "Jaguar",
      "model": "Wrangler",
      "type": "Cargo Van",
      "fuel": "Electric",
      "color": "green",
      "image": "https://loremflickr.com/640/480/people",
      "cost": "604.00",
      "id": "44"
  },
  {
      "Vehicle": "Volvo Land Cruiser",
      "manufacturer": "Kia",
      "model": "1",
      "type": "Cargo Van",
      "fuel": "Gasoline",
      "color": "ivory",
      "image": "https://loremflickr.com/640/480/transport",
      "cost": "826.00",
      "id": "45"
  },
  {
      "Vehicle": "Fiat Impala",
      "manufacturer": "Hyundai",
      "model": "Countach",
      "type": "SUV",
      "fuel": "Electric",
      "color": "azure",
      "image": "https://loremflickr.com/640/480/transport",
      "cost": "589.00",
      "id": "46"
  },
  {
      "Vehicle": "Kia Land Cruiser",
      "manufacturer": "Fiat",
      "model": "Charger",
      "type": "Coupe",
      "fuel": "Hybrid",
      "color": "gold",
      "image": "https://loremflickr.com/640/480/animals",
      "cost": "554.00",
      "id": "47"
  },
  {
      "Vehicle": "Mercedes Benz Beetle",
      "manufacturer": "Volvo",
      "model": "Civic",
      "type": "Coupe",
      "fuel": "Electric",
      "color": "gold",
      "image": "https://loremflickr.com/640/480/technics",
      "cost": "173.00",
      "id": "48"
  },
  {
      "Vehicle": "Smart 2",
      "manufacturer": "Maserati",
      "model": "Volt",
      "type": "Sedan",
      "fuel": "Diesel",
      "color": "indigo",
      "image": "https://loremflickr.com/640/480/food",
      "cost": "314.00",
      "id": "49"
  },
  {
      "Vehicle": "BMW PT Cruiser",
      "manufacturer": "Aston Martin",
      "model": "XTS",
      "type": "Sedan",
      "fuel": "Diesel",
      "color": "mint green",
      "image": "https://loremflickr.com/640/480/nature",
      "cost": "241.00",
      "id": "50"
  },
  {
      "Vehicle": "Bugatti Camry",
      "manufacturer": "Chevrolet",
      "model": "Corvette",
      "type": "Sedan",
      "fuel": "Hybrid",
      "color": "red",
      "image": "https://loremflickr.com/640/480/people",
      "cost": "732.00",
      "id": "51"
  },
  {
      "Vehicle": "Ferrari Silverado",
      "manufacturer": "Volkswagen",
      "model": "Charger",
      "type": "Minivan",
      "fuel": "Diesel",
      "color": "green",
      "image": "https://loremflickr.com/640/480/business",
      "cost": "80.00",
      "id": "52"
  },
  {
      "Vehicle": "Bugatti Spyder",
      "manufacturer": "Rolls Royce",
      "model": "Prius",
      "type": "Coupe",
      "fuel": "Electric",
      "color": "grey",
      "image": "https://loremflickr.com/640/480/city",
      "cost": "527.00",
      "id": "53"
  },
  {
      "Vehicle": "Mini Expedition",
      "manufacturer": "Volvo",
      "model": "Camry",
      "type": "Extended Cab Pickup",
      "fuel": "Electric",
      "color": "ivory",
      "image": "https://loremflickr.com/640/480/city",
      "cost": "689.00",
      "id": "54"
  },
  {
      "Vehicle": "Fiat 1",
      "manufacturer": "Kia",
      "model": "A4",
      "type": "Convertible",
      "fuel": "Electric",
      "color": "silver",
      "image": "https://loremflickr.com/640/480/nightlife",
      "cost": "378.00",
      "id": "55"
  },
  {
      "Vehicle": "Aston Martin Silverado",
      "manufacturer": "Maserati",
      "model": "Malibu",
      "type": "Cargo Van",
      "fuel": "Hybrid",
      "color": "violet",
      "image": "https://loremflickr.com/640/480/sports",
      "cost": "310.00",
      "id": "56"
  },
  {
      "Vehicle": "Porsche Model S",
      "manufacturer": "Aston Martin",
      "model": "CX-9",
      "type": "SUV",
      "fuel": "Diesel",
      "color": "indigo",
      "image": "https://loremflickr.com/640/480/cats",
      "cost": "567.00",
      "id": "57"
  },
  {
      "Vehicle": "Cadillac LeBaron",
      "manufacturer": "Aston Martin",
      "model": "Colorado",
      "type": "Wagon",
      "fuel": "Electric",
      "color": "lime",
      "image": "https://loremflickr.com/640/480/sports",
      "cost": "878.00",
      "id": "58"
  },
  {
      "Vehicle": "Dodge Fortwo",
      "manufacturer": "Maserati",
      "model": "Camaro",
      "type": "Sedan",
      "fuel": "Electric",
      "color": "plum",
      "image": "https://loremflickr.com/640/480/sports",
      "cost": "877.00",
      "id": "59"
  },
  {
      "Vehicle": "Lamborghini Spyder",
      "manufacturer": "Bugatti",
      "model": "Volt",
      "type": "Cargo Van",
      "fuel": "Electric",
      "color": "violet",
      "image": "https://loremflickr.com/640/480/cats",
      "cost": "291.00",
      "id": "60"
  },
  {
      "Vehicle": "Rolls Royce 1",
      "manufacturer": "Chevrolet",
      "model": "PT Cruiser",
      "type": "Wagon",
      "fuel": "Gasoline",
      "color": "lime",
      "image": "https://loremflickr.com/640/480/technics",
      "cost": "860.00",
      "id": "61"
  },
  {
      "Vehicle": "Ferrari Focus",
      "manufacturer": "Cadillac",
      "model": "Model S",
      "type": "Minivan",
      "fuel": "Gasoline",
      "color": "salmon",
      "image": "https://loremflickr.com/640/480/cats",
      "cost": "698.00",
      "id": "62"
  },
  {
      "Vehicle": "Volkswagen Altima",
      "manufacturer": "Smart",
      "model": "Escalade",
      "type": "Hatchback",
      "fuel": "Gasoline",
      "color": "cyan",
      "image": "https://loremflickr.com/640/480/city",
      "cost": "702.00",
      "id": "63"
  },
  {
      "Vehicle": "Tesla Model X",
      "manufacturer": "Mazda",
      "model": "Escalade",
      "type": "SUV",
      "fuel": "Hybrid",
      "color": "indigo",
      "image": "https://loremflickr.com/640/480/transport",
      "cost": "822.00",
      "id": "64"
  },
  {
      "Vehicle": "Kia Sentra",
      "manufacturer": "BMW",
      "model": "ATS",
      "type": "Sedan",
      "fuel": "Electric",
      "color": "purple",
      "image": "https://loremflickr.com/640/480/people",
      "cost": "556.00",
      "id": "65"
  },
  {
      "Vehicle": "BMW F-150",
      "manufacturer": "Jaguar",
      "model": "Golf",
      "type": "SUV",
      "fuel": "Diesel",
      "color": "teal",
      "image": "https://loremflickr.com/640/480/people",
      "cost": "718.00",
      "id": "66"
  },
  {
      "Vehicle": "Audi Colorado",
      "manufacturer": "Bentley",
      "model": "Focus",
      "type": "Wagon",
      "fuel": "Diesel",
      "color": "yellow",
      "image": "https://loremflickr.com/640/480/abstract",
      "cost": "352.00",
      "id": "67"
  },
  {
      "Vehicle": "BMW Mustang",
      "manufacturer": "Lamborghini",
      "model": "Model T",
      "type": "Wagon",
      "fuel": "Gasoline",
      "color": "green",
      "image": "https://loremflickr.com/640/480/people",
      "cost": "418.00",
      "id": "68"
  },
  {
      "Vehicle": "Rolls Royce Accord",
      "manufacturer": "Ford",
      "model": "911",
      "type": "Convertible",
      "fuel": "Hybrid",
      "color": "salmon",
      "image": "https://loremflickr.com/640/480/nightlife",
      "cost": "870.00",
      "id": "69"
  },
  {
      "Vehicle": "Kia Civic",
      "manufacturer": "Nissan",
      "model": "911",
      "type": "Crew Cab Pickup",
      "fuel": "Gasoline",
      "color": "plum",
      "image": "https://loremflickr.com/640/480/sports",
      "cost": "569.00",
      "id": "70"
  },
  {
      "Vehicle": "Lamborghini Mustang",
      "manufacturer": "Honda",
      "model": "Escalade",
      "type": "Coupe",
      "fuel": "Hybrid",
      "color": "sky blue",
      "image": "https://loremflickr.com/640/480/city",
      "cost": "360.00",
      "id": "71"
  },
  {
      "Vehicle": "Bentley Expedition",
      "manufacturer": "Ferrari",
      "model": "Model X",
      "type": "Extended Cab Pickup",
      "fuel": "Gasoline",
      "color": "teal",
      "image": "https://loremflickr.com/640/480/food",
      "cost": "896.00",
      "id": "72"
  },
  {
      "Vehicle": "Ford Expedition",
      "manufacturer": "Aston Martin",
      "model": "Element",
      "type": "Extended Cab Pickup",
      "fuel": "Diesel",
      "color": "turquoise",
      "image": "https://loremflickr.com/640/480/abstract",
      "cost": "213.00",
      "id": "73"
  },
  {
      "Vehicle": "Tesla Element",
      "manufacturer": "Bentley",
      "model": "Model Y",
      "type": "Cargo Van",
      "fuel": "Gasoline",
      "color": "gold",
      "image": "https://loremflickr.com/640/480/sports",
      "cost": "217.00",
      "id": "74"
  },
  {
      "Vehicle": "Smart XTS",
      "manufacturer": "Aston Martin",
      "model": "Camaro",
      "type": "Convertible",
      "fuel": "Hybrid",
      "color": "pink",
      "image": "https://loremflickr.com/640/480/cats",
      "cost": "469.00",
      "id": "75"
  },
  {
      "Vehicle": "Mercedes Benz Model S",
      "manufacturer": "Tesla",
      "model": "Camaro",
      "type": "Coupe",
      "fuel": "Gasoline",
      "color": "ivory",
      "image": "https://loremflickr.com/640/480/technics",
      "cost": "186.00",
      "id": "76"
  },
  {
      "Vehicle": "Jaguar V90",
      "manufacturer": "Smart",
      "model": "Alpine",
      "type": "Convertible",
      "fuel": "Electric",
      "color": "salmon",
      "image": "https://loremflickr.com/640/480/cats",
      "cost": "921.00",
      "id": "77"
  },
  {
      "Vehicle": "Maserati Explorer",
      "manufacturer": "Lamborghini",
      "model": "Mustang",
      "type": "Convertible",
      "fuel": "Electric",
      "color": "olive",
      "image": "https://loremflickr.com/640/480/transport",
      "cost": "517.00",
      "id": "78"
  },
  {
      "Vehicle": "Smart Charger",
      "manufacturer": "Hyundai",
      "model": "El Camino",
      "type": "Wagon",
      "fuel": "Gasoline",
      "color": "silver",
      "image": "https://loremflickr.com/640/480/nightlife",
      "cost": "240.00",
      "id": "79"
  },
  {
      "Vehicle": "Land Rover Altima",
      "manufacturer": "Volkswagen",
      "model": "Expedition",
      "type": "Passenger Van",
      "fuel": "Electric",
      "color": "grey",
      "image": "https://loremflickr.com/640/480/technics",
      "cost": "974.00",
      "id": "80"
  },
  {
      "Vehicle": "Dodge Challenger",
      "manufacturer": "Cadillac",
      "model": "Roadster",
      "type": "Sedan",
      "fuel": "Hybrid",
      "color": "red",
      "image": "https://loremflickr.com/640/480/food",
      "cost": "514.00",
      "id": "81"
  },
  {
      "Vehicle": "Volkswagen Model T",
      "manufacturer": "Maserati",
      "model": "Alpine",
      "type": "Convertible",
      "fuel": "Hybrid",
      "color": "salmon",
      "image": "https://loremflickr.com/640/480/abstract",
      "cost": "809.00",
      "id": "82"
  },
  {
      "Vehicle": "BMW LeBaron",
      "manufacturer": "Polestar",
      "model": "Cruze",
      "type": "Hatchback",
      "fuel": "Gasoline",
      "color": "azure",
      "image": "https://loremflickr.com/640/480/abstract",
      "cost": "857.00",
      "id": "83"
  },
  {
      "Vehicle": "Toyota Civic",
      "manufacturer": "Rolls Royce",
      "model": "Land Cruiser",
      "type": "Cargo Van",
      "fuel": "Hybrid",
      "color": "teal",
      "image": "https://loremflickr.com/640/480/people",
      "cost": "923.00",
      "id": "84"
  },
  {
      "Vehicle": "Aston Martin Aventador",
      "manufacturer": "Jeep",
      "model": "Escalade",
      "type": "Convertible",
      "fuel": "Diesel",
      "color": "indigo",
      "image": "https://loremflickr.com/640/480/business",
      "cost": "492.00",
      "id": "85"
  },
  {
      "Vehicle": "Aston Martin Cruze",
      "manufacturer": "Porsche",
      "model": "Model T",
      "type": "Wagon",
      "fuel": "Hybrid",
      "color": "turquoise",
      "image": "https://loremflickr.com/640/480/business",
      "cost": "735.00",
      "id": "86"
  },
  {
      "Vehicle": "Bugatti Countach",
      "manufacturer": "Mercedes Benz",
      "model": "Jetta",
      "type": "Coupe",
      "fuel": "Diesel",
      "color": "lavender",
      "image": "https://loremflickr.com/640/480/nightlife",
      "cost": "914.00",
      "id": "87"
  },
  {
      "Vehicle": "Bugatti Model X",
      "manufacturer": "Lamborghini",
      "model": "A8",
      "type": "Minivan",
      "fuel": "Gasoline",
      "color": "cyan",
      "image": "https://loremflickr.com/640/480/sports",
      "cost": "906.00",
      "id": "88"
  },
  {
      "Vehicle": "Honda Land Cruiser",
      "manufacturer": "Maserati",
      "model": "Civic",
      "type": "Convertible",
      "fuel": "Electric",
      "color": "tan",
      "image": "https://loremflickr.com/640/480/nightlife",
      "cost": "874.00",
      "id": "89"
  },
  {
      "Vehicle": "Porsche Element",
      "manufacturer": "Chevrolet",
      "model": "Fiesta",
      "type": "Sedan",
      "fuel": "Electric",
      "color": "lime",
      "image": "https://loremflickr.com/640/480/fashion",
      "cost": "196.00",
      "id": "90"
  }
]

filter(){
  this.vehicles = this.vehicles.filter((vehicle:any)=>vehicle.Vehicle.includes(this.term))
}

manfacture(){
  this.vehicles = this.vehicles.filter((vehicle:any)=>vehicle.manufacturer.includes(this.manufactureValue))
}
fuel(){
  this.vehicles = this.vehicles.filter((vehicle:any)=>vehicle.fuel.includes(this.fuelValue))
}

color(){
    this.vehicles = this.vehicles.filter((vehicle:any)=>vehicle.color.includes(this.colorValue))
}

type(){
    this.vehicles = this.vehicles.filter((vehicle:any)=>vehicle.type.includes(this.typeValue))
}

cost(){
    if(this.costValue=="true"){
        this.vehicles = this.vehicles.sort((a:any, b:any)=>b.cost - a.cost);    
    }
    else{
        this.vehicles = this.vehicles.sort((a:any, b:any)=>a.cost - b.cost);
    }
}

range(){
    this.vehicles = this.vehicles.filter((vehicle:any)=>vehicle.cost >= this.formValue && vehicle.cost<=this.toValue);
}

}
