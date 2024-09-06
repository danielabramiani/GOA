def add_contact(contacts, name, phone):
    contacts.append((name, phone))
    print(f"Added contact: {name.capitalize()} with phone: {phone}")

def view_contacts(contacts):
    if not contacts:
        print("No contacts available.")
    else:
        for name, phone in contacts:
            print(f"Name: {name.capitalize()}, Phone: {phone}")

def search_contact(contacts, search_name):
    found = False
    for name, phone in contacts:
        if name.lower() == search_name.lower():
            print(f"Found contact: Name: {name.capitalize()}, Phone: {phone}")
            found = True
            break
    if not found:
        print("Contact not found.")

def remove_contact(contacts, remove_name):
    found = False
    for i in range(len(contacts)):
        if contacts[i][0].lower() == remove_name.lower():
            del contacts[i]
            print(f"Removed contact: {remove_name.capitalize()}")
            found = True
            break
    if not found:
        print("Contact not found.")

def update_contact(contacts, name, new_phone):
    found = False
    for i in range(len(contacts)):
        if contacts[i][0].lower() == name.lower():
            contacts[i] = (name, new_phone)
            print(f"Updated contact: Name: {name.capitalize()}, New Phone: {new_phone}")
            found = True
            break
    if not found:
        print("Contact not found.")

def main():
    contacts = []
    while True:
        print("1. Add Contact")
        print("2. View Contacts")
        print("3. Search Contact")
        print("4. Remove Contact")
        print("5. Update Contact")
        print("6. Exit")
        choice = input("Enter choice: ").strip()

        if choice == "1":
            name = input("Enter contact name: ").strip()
            phone = input("Enter contact phone number: ").strip()
            add_contact(contacts, name, phone)
        elif choice == "2":
            view_contacts(contacts)
        elif choice == "3":
            search_name = input("Enter contact name to search: ").strip()
            search_contact(contacts, search_name)
        elif choice == "4":
            remove_name = input("Enter contact name to remove: ").strip()
            remove_contact(contacts, remove_name)
        elif choice == "5":
            name = input("Enter contact name to update: ").strip()
            new_phone = input("Enter new phone number: ").strip()
            update_contact(contacts, name, new_phone)
        elif choice == "6":
            print("Exiting the contact manager.")
            break
        else:
            print("Invalid choice. Please try again.")

main()