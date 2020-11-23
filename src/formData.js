import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from './utils/validators';

export const title = {
  label: "Title",
  isRequired: true,
  fields: {
    title: {
      tagName: "input",
      inputAttributes: {
        id: "title",
        type: "text",
        placeholder: "Make it short and clear"
      },
      validators: [VALIDATOR_REQUIRE()],
      errorText: "This cannot be empty"
    }
  }
};

export const description = {
  label: "Description",
  isRequired: true,
  fields: {
    description: {
      tagName: "textarea",
      inputAttributes: {
        id: "description",
        type: "text",
        placeholder: "Write about your event, be creative"
      },
      charLimit: 140,
      validators: [VALIDATOR_REQUIRE()],
      errorText: "This cannot be empty",
    }
  }
};

export const category = {
  label: "Category",
  fields: {
    category: {
      tagName: "select",
      inputAttributes: {
        id: "category"
      },
      defaultOption: "Select category",
      optionsUrl: 'http://www.mocky.io/v2/5bcdd3942f00002c00c855ba',
      note: 'If there are more than one fitting categories, select the closest one!'
    }
  }
};

export const payment = {
  label: "Payment",
  fields: {
    isPaidEvent: {
      tagName: "input",
      inputAttributes: {
        id: "payment",
        type: "radio"
      },
      radioElementData: {
        name: "Payment",
        options: [
          {
            labelText: "Free event",
            value: false
          },
          {
            labelText: "Paid event",
            value: true
          }
        ]
      }
    },
    amount: {
      tagName: "input",
      inputAttributes: {
        id: "payment-amount",
        // workaround: type "number" would allow +-e characters as well
        type: "text",
        placeholder: "Fee"
      },
      min: 0,
      widthPercent: 30,
      errorText: "Please add a valid amount"
    },
    blankLabel: "$"      
  }
};

export const reward = {
  label: "Reward",
  fields: {
    reward: {
      tagName: "input",
      inputAttributes: {
        id: "reward",
        // workaround: type "number" would allow +-e characters as well
        type: "text",
        placeholder: "Number"
      },
      min: 0,
      widthPercent: 30
    },
    points: {
      singular: "reward point for attendance",
      plural: "reward points for attendance"
    }
  }
};

export const responsible = {
  label: "Responsible",
  isRequired: true,
  fields: {
    responsible: {
      tagName: "select",
      type: "optgroup",
      inputAttributes: {
        id: "responsible",
        type: "radio"
      },
      optionsUrl: 'http://www.mocky.io/v2/5bcdd7992f00006300c855d5',
      radioElementData: {
        name: "Payment",
        options: [
          {
            labelText: "Free event",
          },
          {
            labelText: "Paid event"
          }
        ]
      }
    }
  }
};

export const email = {
  label: "Email",
  fields: {
    email: {
      tagName: "input",
      inputAttributes: {
        id: "email",
        type: "email",
        placeholder: "Email"
      },
      validators: [VALIDATOR_EMAIL()],
      errorText: "Please enter a valid email",
    }
  }
};

export const startsOn = {
  label: "Starts on",
  isRequired: true,
  fields: {
    date: {
      tagName: "input",
      inputAttributes: {
        id: "startsOnDate",
        type: "date"
      },
      widthPercent: 30
    },
    atLabel: {
      type: "blankLabel",
      text: "at"
    },
    time: {
      tagName: "input",
      inputAttributes: {
        id: "startsOnTime",
        type: "time"
      },
      widthPercent: 30
    },
    isAm: {
      tagName: "input",
      inputAttributes: {
        id: "startsOnisAm",
        type: "radio"
      },
      widthPercent: 30,
      radioElementData: {
        name: "isAm",
        options: [
          {
            labelText: "AM",
            value: true
          },
          {
            labelText: "PM",
            value: false
          }
        ]
      }
    },
  }
};

export const duration = {
  label: "Duration",
  fields: {
    duration: {
      tagName: "input",
      inputAttributes: {
        id: "duration",
        type: "text",            // workaround: number would allow +-e characters as well
        placeholder: "Number"
      },
      min: 0,
      max: 12,
      widthPercent: 30
    },
    hours: {
      singular: "hour",
      plural: "hours"
    }
  }
};

export const loggedInUser = {
  id: 8
};
