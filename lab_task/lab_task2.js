function generateInvitations(guests, ...additionalDetails) {
    return guests.map(guest => {
      let message = `Dear ${guest.name},\n`;
  
      if (guest.age) {
        message += `You're invited to our party celebrating your ${guest.age}th birthday`;
      } else {
        message += `You're invited to our party`;
      }
  
      if (additionalDetails.length > 0) {
        message += `${additionalDetails.join('\n')}\n`;
      }
  
      message += "Please RSVP as soon as possible.\n";
      return message;
    });
  }
  
  // Example usage:
  const guests = [
    { name: "Muskan", age: 22, rsvp: true },
    { name: "simran", age: 25, rsvp: false },
    { name: "komal", age: 18, rsvp: true }
  ];
  
  const invitations = generateInvitations(guests, "Dress code: Semi-formal", "Bring a friend!");
  console.log(invitations);
  