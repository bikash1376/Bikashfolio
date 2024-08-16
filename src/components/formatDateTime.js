function formatDateTime() {
    const date = new Date();
    
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: false
    };
    
    return date.toLocaleString('en-US', options);
  }
  