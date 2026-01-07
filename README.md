# @wix/n8n-nodes-wix

This is an n8n community node that lets you use **Wix** in your n8n workflows.

[Wix](https://www.wix.com/) is a leading cloud-based website development platform that enables users to create professional websites, online stores, bookings, and more. This node allows you to automate workflows by integrating with Wix's eCommerce, CRM, and other services.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

- [Installation](#installation)
- [Operations](#operations)
- [Triggers](#triggers)
- [Credentials](#credentials)
- [Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node provides actions for managing Products and Orders in your Wix store.

### Product

| Operation | Description |
|-----------|-------------|
| **Create** | Create a new product with inventory |
| **Delete** | Delete an existing product |
| **Get** | Get a single product by ID |
| **Get Many** | Query and list products |
| **Update** | Update an existing product with inventory |

> **Note**: Product operations use **Catalog V3** and are not compatible with Catalog V1 sites.

📚 [Wix Stores Products API Documentation](https://dev.wix.com/docs/rest/business-solutions/stores/catalog/products/introduction)

### Order

| Operation | Description |
|-----------|-------------|
| **Cancel** | Cancel an existing order |
| **Create** | Create a new order |
| **Get** | Get a single order by ID |
| **Get Many** | Query and list orders |
| **Update** | Update an existing order |

📚 [Wix eCommerce Orders API Documentation](https://dev.wix.com/docs/rest/business-solutions/e-commerce/orders/order-object)

## Triggers

The **Wix Trigger** node allows you to start workflows based on events happening in your Wix site. Triggers are powered by [Wix Automations](https://dev.wix.com/docs/rest/business-management/automations/automations/introduction).

### Available Triggers

<details>
<summary><strong>Back in Stock</strong></summary>

- Back in stock request created
- Product back in stock

</details>

<details>
<summary><strong>Bookings</strong></summary>

- Appointment request approved
- Appointment request declined
- Appointment requested
- Appointment or class updated
- Booking canceled
- Client checks in
- Client checked in X times
- Client marked as "no-show"
- Course updated
- Failed to apply booking fee
- Failed to collect applied booking fees
- No sessions left
- Session booked
- Session double-booked
- Session ends
- Session starts

</details>

<details>
<summary><strong>Blog</strong></summary>

- Blog post liked
- Blog post new comment
- New blog post published

</details>

<details>
<summary><strong>Chat & Inbox</strong></summary>

- Chat message received
- Chat message sent
- Message received (Wix Chat or Inbox preset email)
- Pre-chat form submitted
- Visitor on site

</details>

<details>
<summary><strong>CMS</strong></summary>

- CMS form submitted

</details>

<details>
<summary><strong>Contacts & Segments</strong></summary>

- Contact Assigned
- Contact enters segment
- Contact leaves segment
- Label added to contact
- Label removed from contact
- New contact created

</details>

<details>
<summary><strong>Donations</strong></summary>

- Donation is made
- Recurring donation is canceled
- Recurring donation is charged

</details>

<details>
<summary><strong>Events & Tickets</strong></summary>

- Daily report
- Daily RSVP report
- Event canceled
- Event ends
- Event published
- Event reminder date has arrived
- Event starts
- Guest checked in
- Guest registers to waitlist
- Guest RSVPd NO email
- Guest RSVPd YES email
- Guest RSVPs
- New spot opened for waitlist guests
- Order confirmed but ticket couldn't be generated
- Order placed
- RSVP confirmed
- Ticket order email
- Ticket ordered
- Ticket sale ended
- Ticket sale started

</details>

<details>
<summary><strong>File Share</strong></summary>

- Folder access given
- Folder access requested

</details>

<details>
<summary><strong>Forms</strong></summary>

- Form submitted

</details>

<details>
<summary><strong>Forum</strong></summary>

- Forum comment deleted
- Forum comment published
- Forum post published
- Reacted to Forum comment
- Reacted to Forum post
- Removed reaction from Forum comment
- Removed reaction from Forum post

</details>

<details>
<summary><strong>Groups</strong></summary>

- Group create request declined
- Group has new member generic update
- Group Updated
- Member comments on a post
- Member creates a post
- Member invited to group
- Member joins a group
- Member leaves a group
- Member mentioned someone
- Member mentions someone
- Member pays for a group
- Member reacts to a comment
- Member reacts to a post
- Member removed as payment plan expired
- Member request to join a group approved
- Member request to join a group declined
- Member requests to create a group
- Member requests to join a group
- Member role updated
- Members create posts
- Members join a group
- New group created
- Person invited to group
- Reminder to create group
- Reminder to invite members
- Someone you follow creates a post
- Weekly Digest

</details>

<details>
<summary><strong>Invoices</strong></summary>

- Invoice overdue
- Invoice paid
- Invoice payment received
- Invoice sent

</details>

<details>
<summary><strong>Loyalty Program</strong></summary>

- Customer earns points
- Customer enters tier
- Customer has enough points for rewards
- Points balance adjusted manually
- Points expire in 14 days
- Social media profile followed

</details>

<details>
<summary><strong>Members</strong></summary>

- Member approved
- Member blocked
- Member deleted
- Member email confirmation required
- Member logs in
- Set contact as member
- Site member asks to reset password
- Visitor signs up to your site

</details>

<details>
<summary><strong>Online Programs</strong></summary>

- Certificate available to download
- Member invited to join a program
- Member joins a program
- Member pays for a program
- Member's join request approved
- Member's join request declined
- Offline payment declined
- Offline program payment received
- Participant access denied
- Participant completes a program
- Participant completes a step
- Participant data exported
- Participant leaves a program
- Participant manually added to program
- Payment failed
- Program end date has passed
- Program ended without all steps completed
- Program join request received
- Reminder to complete scheduled steps
- Visitor access denied

</details>

<details>
<summary><strong>Pay Links</strong></summary>

- Payment received
- Send a pay link

</details>

<details>
<summary><strong>Portfolio</strong></summary>

- New project created

</details>

<details>
<summary><strong>Price Quotes</strong></summary>

- Price quote accepted
- Price quote expired
- Price quote sent

</details>

<details>
<summary><strong>Pricing Plans</strong></summary>

- Plan canceled
- Plan ordered

</details>

<details>
<summary><strong>Proposals</strong></summary>

- Proposal accepted
- Proposal sent

</details>

<details>
<summary><strong>Recurring Invoices</strong></summary>

- Recurring payment canceled
- Recurring payment starts

</details>

<details>
<summary><strong>Restaurants</strong></summary>

- Delivery order ready
- Future order due by
- Order accepted
- Order canceled
- Order created
- Order edited
- Order fulfilled
- Order out for Delivery
- Pickup order ready
- Restaurant order placed

</details>

<details>
<summary><strong>Reviews</strong></summary>

- Review created
- Review deleted
- Review moderation status changed
- Review request created

</details>

<details>
<summary><strong>Stores (eCommerce)</strong></summary>

- Checkout abandoned
- Credit card is charged
- Order placed
- Payment Added to Order
- Store order placed

</details>

<details>
<summary><strong>Subscriptions</strong></summary>

- Customer's payment method updated
- Payment fails - grace period starts
- Payment successful - grace period ends
- Subscription's billing date updated
- Subscription's item price updated

</details>

<details>
<summary><strong>Table Reservations</strong></summary>

- Table reservation added manually
- Table reservation canceled
- Table reservation starts
- Table reservation time updated
- Table reserved by guest

</details>

<details>
<summary><strong>Tasks</strong></summary>

- Task overdue

</details>

<details>
<summary><strong>Workflows</strong></summary>

- Card added or moved

</details>

📚 [Wix Automations API Documentation](https://dev.wix.com/docs/rest/business-management/automations/automations/introduction)

## Credentials

To use this node, you need to set up Wix API credentials:

### Prerequisites

1. A [Wix](https://www.wix.com/) account with a published website

### Setup

1. Go to the [API Keys Manager](https://manage.wix.com/account/api-keys) to create a new API key
2. Assign the appropriate permissions for the APIs you want to access
3. Copy your API key and store it securely
4. Get your **Site ID** from your site's dashboard URL (it appears after `/dashboard/` in the URL)
5. In n8n, create new credentials for **Wix API** and enter:
   - **API Key**: Your Wix API key
   - **Site ID**: Your Wix site ID

> **Important**: Store your API keys securely and use them only in server-side code.

📚 [How to Generate an API Key](https://dev.wix.com/docs/go-headless/develop-your-project/admin-operations/generate-an-api-key)

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Wix REST API Documentation](https://dev.wix.com/docs/api-reference)
- [Wix Developer Center](https://dev.wix.com/)
- [Wix Stores API](https://dev.wix.com/docs/rest/business-solutions/stores/catalog/products/introduction)
- [Wix eCommerce Orders API](https://dev.wix.com/docs/rest/business-solutions/e-commerce/orders/order-object)
