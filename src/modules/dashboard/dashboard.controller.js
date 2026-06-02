const catchAsync = require('../../utils/catchAsync')
const { ApiResponse } = require('../../utils/apiResponse')
const dashboardService = require('./dashboard.service')

const getDashboard = catchAsync(async (req, res) => {
  const [
    totalTemplates,
    totalQuestions,
    totalActions,
    completedActions
  ] = await Promise.all([
    dashboardService.getTemplateCount(),
    dashboardService.getQuestionCount(),
    dashboardService.getActionCount(),
    dashboardService.getActionCountByStatus('Completed')
  ])

  const openActions =
    totalActions - completedActions

  return ApiResponse.success(
    res,
    200,
    'Dashboard metrics retrieved successfully',
    {
      totalTemplates,
      totalQuestions,
      totalActions,
      openActions,
      completedActions
    }
  )
})

module.exports = { getDashboard }