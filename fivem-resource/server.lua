RegisterServerEvent('redeem:points')
AddEventHandler('redeem:points', function(item)
    local src = source
    local identifier = GetPlayerIdentifier(src, 0)
    PerformHttpRequest('http://localhost:3001/api/redeem', function(code, data, headers)
        if code == 200 then
            TriggerClientEvent('chat:addMessage', src, {
                args = {'[Rewards]', 'You redeemed: ' .. item}
            })
            -- QBCore item logic
        else
            TriggerClientEvent('chat:addMessage', src, {
                args = {'[Rewards]', 'Failed to redeem item.'}
            })
        end
    end, 'POST', json.encode({ discordId = identifier, item = item }), { ['Content-Type'] = 'application/json' })
end)