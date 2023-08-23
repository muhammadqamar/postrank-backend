import { Controller, Get } from '@nestjs/common';
import axios from 'axios';

@Controller('analytics')
export class AnalyticsController {
  private readonly googleAnalyticsUrl =
    'https://www.googleapis.com/analytics/v3/management/accountSummaries';
  private readonly accessToken = 'ya29.a0AfB_byBBs_28vAlQJVEcwkj8i9yl6hsu7jCVI946Kwpn0yDVKVapFq9YK0-WiUt8UheOGIKUyoZaBVUcguzoNeGtKMRnEwVcMteUfTRZX9-zzmvWK0fD691DMQ-mcYXMcNM4LWZUmhdOQ28YQZ9lZOddaCXHXi-cpLgUUxQaCgYKAX0SARESFQHsvYlsfT5e1SRFehoDdOp2peQxlw0174'; // Replace with your actual access token

  @Get('accountSummaries')
  async getAccountSummaries() {
    try {
      const response = await axios.get(this.googleAnalyticsUrl, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch account summaries');
    }
  }
}
