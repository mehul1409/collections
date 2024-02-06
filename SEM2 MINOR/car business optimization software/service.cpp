#include <iostream>
#include <string>
#include <vector>

using namespace std;
struct Car {
    string make;
    string model;
    int year;
    int mileage;
    bool serviced;
};
void addCar(vector<Car>& cars) {
    Car car;

    cout << "Enter the make of the car: ";
    getline(cin, car.make);

    cout << "Enter the model of the car: ";
    getline(cin, car.model);

    cout << "Enter the year of the car: ";
    cin >> car.year;

    cout << "Enter the mileage of the car: ";
    cin >> car.mileage;

    car.serviced = false;

    cars.push_back(car);

    cout << "Car added successfully!" << endl;
}
void displayCars(const vector<Car>& cars) {
    cout << "Cars in the facility:" << endl;

    for (const auto& car : cars) {
        cout << car.make << " " << car.model << " (" << car.year << "), " << car.mileage << " miles, ";

        if (car.serviced) {
            cout << "serviced" << endl;
        } else {
            cout << "unserviced" << endl;
        }
    }
}
void serviceCar(vector<Car>& cars) {
    int index;

    cout << "Enter the index of the car to service: ";
    cin >> index;

    if (index < 0 || index >= cars.size()) {
        cout << "Invalid index. Please try again." << endl;
        return;
    }

    cars[index].serviced = true;

    cout << "Car serviced successfully!" << endl;
}

int main() {
    vector<Car> cars;

    while (true) {
        cout << "Please select an option: " << endl;
        cout << "1. Add a new car" << endl;
        cout << "2. Display all cars" << endl;
        cout << "3. Service a car" << endl;
        cout << "4. Quit" << endl;
        cout << "> ";

        int option;
        cin >> option;

        switch (option) {
            case 1:
                cin.ignore();
                addCar(cars);
                break;

            case 2:
                displayCars(cars);
                break;

            case 3:
                serviceCar(cars);
                break;

            case 4:
                cout << "Thank you for using our car servicing facility. Goodbye!" << endl;
                return 0;

            default:
                cout << "Invalid option. Please try again." << endl;
                break;
        }
    }
}
