import { Controller, Get, Query } from '@nestjs/common';
import axios from 'axios';

@Controller('analytics')
export class AnalyticsController {
  private readonly googleAnalyticsUrl =
    'https://www.googleapis.com/analytics/v3/management/accountSummaries';

  @Get('accountSummaries')
  async getAccountSummaries(@Query('accessToken') paramValue: string) {
    try {
      const response = await axios.get(this.googleAnalyticsUrl, {
        headers: {
          Authorization: `Bearer ${paramValue}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch account summaries');
    }
  }
}
